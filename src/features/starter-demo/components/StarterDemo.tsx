'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Divider, Stack, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';

import MuiButton from '@/components/Shared/MuiButton';
import MuiInput from '@/components/Shared/MuiInput';
import { getHealth } from '@/features/starter-demo/api/getHealth';
import {
  contactSchema,
  type ContactFormValues,
} from '@/features/starter-demo/schemas/contactSchema';
import { useDemoStore } from '@/features/starter-demo/store/useDemoStore';
import { getApiErrorMessage } from '@/services/http/errors';

import { DemoPaper } from './styled';

export function StarterDemo() {
  const submitCount = useDemoStore((state) => state.submitCount);
  const incrementSubmitCount = useDemoStore((state) => state.incrementSubmitCount);

  const [apiStatus, setApiStatus] = useState<string>();
  const [checkingApi, setCheckingApi] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit = handleSubmit(async () => {
    incrementSubmitCount();
  });

  const checkApi = async () => {
    setCheckingApi(true);
    setApiStatus(undefined);

    try {
      const response = await getHealth();
      setApiStatus(`API ${response.status} · ${new Date(response.timestamp).toLocaleTimeString()}`);
    } catch (error) {
      setApiStatus(getApiErrorMessage(error, 'API request failed'));
    } finally {
      setCheckingApi(false);
    }
  };

  return (
    <DemoPaper variant="outlined">
      <Stack spacing={3}>
        <Stack spacing={0.5}>
          <Typography variant="subtitle2">Integration smoke test</Typography>
          <Typography color="text.secondary">
            This disposable feature demonstrates RHF + Zod, Zustand and the shared Axios client.
          </Typography>
        </Stack>

        <Stack component="form" onSubmit={onSubmit} spacing={2} noValidate>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <MuiInput.Base
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                label="Name"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                noMarginBottom
                textFieldProps={{ name: field.name, inputRef: field.ref }}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <MuiInput.Base
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                label="Email"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                noMarginBottom
                textFieldProps={{ name: field.name, type: 'email', inputRef: field.ref }}
              />
            )}
          />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <MuiButton type="submit" text="Validate form" disabled={isSubmitting} />
            <MuiButton
              type="button"
              variant="outlined"
              text="Check API route"
              onClick={checkApi}
              loading={checkingApi}
            />
          </Stack>
        </Stack>

        <Divider />

        <Stack spacing={1}>
          <Typography variant="body2">Zustand submit count: {submitCount}</Typography>
          {apiStatus && (
            <Alert severity={apiStatus.startsWith('API ok') ? 'success' : 'error'}>
              {apiStatus}
            </Alert>
          )}
        </Stack>
      </Stack>
    </DemoPaper>
  );
}
