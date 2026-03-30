import { useEffect } from 'react';
import { Intercom } from '@intercom/messenger-js-sdk';

// Replace with your actual Intercom App ID
const INTERCOM_APP_ID = 'your-intercom-app-id';

export default function IntercomProviderWrapper() {
  useEffect(() => {
    Intercom({
      app_id: INTERCOM_APP_ID,
      // Custom launcher button (hide the default Intercom button)
      hide_default_launcher: true,
      // Custom attributes for context
      custom_launcher_selector: '.intercom-trigger-btn',
      // Language alignment
      language_override: 'zh',
    });
  }, []);

  return null;
}
