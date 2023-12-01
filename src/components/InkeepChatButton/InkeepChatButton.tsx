import { useEffect, useState } from 'react';
import useInkeepSettings from '../../utils/useInkeepSettings';

export const InkeepChatButton = () => {
    const [ChatButton, setChatButton] = useState(null);

    const { baseSettings, aiChatSettings, searchSettings } = useInkeepSettings();
  
    useEffect(() => {
      const loadChatButton = async () => {
        try {
          const { InkeepChatButton } = await import('@inkeep/widgets');
          setChatButton(() => InkeepChatButton);
        } catch (error) {
          console.error('Failed to load ChatButton:', error);
        }
      };
    
      loadChatButton();
    }, []);
  
    const chatButtonProps = {
      baseSettings,
      aiChatSettings,
      searchSettings,
      chatButtonType: 'ICON_TEXT',
      modalSettings: {
        areOpenHotKeysDisabled: true,
      }
    }

    return ChatButton && <ChatButton { ...chatButtonProps } />;
  }