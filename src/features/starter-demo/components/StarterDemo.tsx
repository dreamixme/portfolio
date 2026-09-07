'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Alert,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';

import { getHealth } from '@/features/starter-demo/api/getHealth';
import {
  contactSchema,
  type ContactFormValues,
} from '@/features/starter-demo/schemas/contactSchema';
import { useDemoStore } from '@/features/starter-demo/store/useDemoStore';
import { getApiErrorMessage } from '@/services/http/errors';

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
    <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
      <Stack spacing={3}>
        <Stack spacing={0.5}>
          <Typography variant="h5" fontWeight={800}>
            Integration smoke test
          </Typography>
          <Typography color="text.secondary">
            This disposable feature demonstrates RHF + Zod, Zustand and the shared Axios client.
          </Typography>
        </Stack>

        <Stack component="form" onSubmit={onSubmit} spacing={2} noValidate>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Name"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <Stack direction={{ xs: 'column', sm: 'row' }} gap={1.5}>
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              Validate form
            </Button>
            <Button type="button" variant="outlined" onClick={checkApi} loading={checkingApi}>
              Check API route
            </Button>
          </Stack>
        </Stack>

        <Divider />

        <Stack spacing={1}>
          <Typography variant="body2">Zustand submit count: {submitCount}</Typography>
          {apiStatus && <Alert severity={apiStatus.startsWith('API ok') ? 'success' : 'error'}>{apiStatus}</Alert>}
        </Stack>
      </Stack>
    </Paper>
  );
}
