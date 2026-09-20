# انتشار خودکار سایت

سایت پس از موفقیت بررسی‌ها و ساخت خروجی استاتیک، از شاخه `master` با Explicit FTPS روی هاست منتشر می‌شود. Workflow از همان معماری پروژه طبرستان استفاده می‌کند: ابتدا Build و Artifact ساخته می‌شود، سپس job جداگانه Deploy فایل‌ها را با `lftp` منتقل و نسخه آنلاین را بررسی می‌کند.

## Variables و Secrets گیت‌هاب

در مخزن GitHub وارد `Settings > Secrets and variables > Actions` شوید.

در تب `Variables` با گزینه `New repository variable` این دو مقدار را بسازید:

| Variable   | Value                  |
| ---------- | ---------------------- |
| `FTP_HOST` | `cp187.unitedhost.org` |
| `FTP_PORT` | `21`                   |

آدرس معرفی‌شده در cPanel یعنی `ftp.tabarestanco.ir` به همین سرور متصل می‌شود، اما Certificate سرویس FTPS برای `cp187.unitedhost.org` صادر شده است. استفاده از hostname بالا باعث می‌شود اعتبارسنجی TLS بدون غیرفعال‌کردن کنترل امنیتی موفق باشد.

در تب `Secrets` با گزینه `New repository secret` این دو Secret را بسازید:

| Secret         | Value                             |
| -------------- | --------------------------------- |
| `FTP_USERNAME` | `deploy-peyman@peymanhosseini.ir` |
| `FTP_PASSWORD` | رمز حساب FTP ساخته‌شده در cPanel  |

رمز FTP را در فایل، Issue، Pull Request، commit یا لاگ قرار ندهید.

## Environment پروداکشن

در `Settings > Environments` یک Environment با نام دقیق `production` بسازید.

- برای Deploy کاملاً خودکار، `Required reviewers` را فعال نکنید.
- در `Deployment branches and tags` فقط شاخه `master` را مجاز کنید.
- آدرس Environment در workflow برابر `https://peymanhosseini.ir` است.

## تنظیمات Actions

در `Settings > Actions > General` اجرای GitHub Actions را فعال نگه دارید. Workflow فقط اکشن‌های رسمی GitHub را استفاده می‌کند و مجوز مخزن را روی `contents: read` محدود کرده است.

اگر سیاست اجرای اکشن‌ها روی حالت محدود قرار دارد، استفاده از اکشن‌های رسمی زیر را مجاز کنید:

- `actions/checkout`
- `actions/setup-node`
- `actions/upload-artifact`
- `actions/download-artifact`

## محافظت از شاخه master

پس از اولین اجرای workflow، در `Settings > Branches` یا `Settings > Rules > Rulesets` یک قانون برای `master` بسازید و Status Check با نام `Lint and build` را اجباری کنید. این check روی Pull Request اجرا می‌شود؛ job با نام `Deploy to production` فقط بعد از Push یا Merge موفق به `master` اجرا خواهد شد.

## اولین انتشار

1. دو Variable و دو Secret بالا را ایجاد کنید.
2. Environment با نام `production` را بدون تأیید دستی بسازید.
3. مطمئن شوید SSL دامنه فعال است و `https://peymanhosseini.ir` پاسخ می‌دهد؛ مرحله بررسی آنلاین از HTTPS استفاده می‌کند.
4. تغییرات CI/CD را به `master` Push کنید؛ workflow خودکار اجرا می‌شود.
5. در تب `Actions` اجرای `CI/CD` را باز کنید.
6. ابتدا موفقیت job با نام `Lint and build` و سپس job با نام `Deploy to production` را بررسی کنید.
7. آدرس اصلی سایت، صفحات پروژه، `robots.txt`، `sitemap.xml`، Open Graph image و assetهای CSS، JavaScript و فونت به‌صورت خودکار بررسی می‌شوند.
8. در cPanel گزینه `Force HTTPS Redirect` را برای `peymanhosseini.ir` فعال کنید.

حساب FTP روی Document Root دامنه یعنی `/home/kyukyrwo/peymanhosseini.ir` تنظیم شده است؛ بنابراین workflow پوشه `out/` را به مسیر `/` همان حساب منتقل می‌کند.

## فایل‌های محافظت‌شده هاست

هنگام Deploy، فایل‌های قدیمی مربوط به نسخه قبلی سایت پاک می‌شوند، اما این فایل‌ها و پوشه‌های مدیریت‌شده توسط cPanel حفظ می‌شوند:

- `.well-known`
- `.htaccess`
- `.ftpquota`
- `.user.ini`
- `php.ini`
- `cgi-bin`
- صفحات خطای پیش‌فرض هاست

## انتشار دستی و بازیابی

برای انتشار دستی، در تب `Actions`، workflow با نام `CI/CD` را انتخاب و `Run workflow` را روی شاخه `master` اجرا کنید.

برای بازیابی نسخه قبلی، commit مشکل‌دار را revert کنید و نتیجه را به `master` Push کنید. Workflow خروجی commit بازیابی‌شده را دوباره منتشر می‌کند.

## خطاهای رایج

- خطای خالی‌بودن تنظیمات: نام Variableها و Secretها را دقیقاً مطابق این سند بررسی کنید.
- خطای ورود FTP: مقدار `FTP_USERNAME` و رمز حساب FTP را در cPanel دوباره بررسی کنید.
- خطای Certificate: مقدار `FTP_HOST` باید دقیقاً `cp187.unitedhost.org` باشد؛ workflow اعتبارسنجی Certificate را غیرفعال نمی‌کند.
- خطای بررسی آنلاین بعد از Upload: فعال‌بودن SSL و DNS دامنه را بررسی کنید؛ فایل‌ها ممکن است منتقل شده باشند اما job تا پاسخ صحیح HTTPS موفق نمی‌شود.
