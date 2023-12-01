import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import type {
  InkeepAIChatSettings,
  InkeepSearchSettings,
  InkeepWidgetBaseSettings,
  InkeepModalSettings,
} from "@inkeep/widgets";

type InkeepIdentifierSettings = {
  apiKey: string;
  integrationId: string;
  organizationId: string;
};

type InkeepSharedSettings = {
  baseSettings: InkeepWidgetBaseSettings;
  aiChatSettings: InkeepAIChatSettings;
  searchSettings: InkeepSearchSettings;
  modalSettings: InkeepModalSettings;
};

const useInkeepSettings = (): InkeepSharedSettings => {
  const { siteConfig } = useDocusaurusContext();
  const { apiKey, integrationId, organizationId } = siteConfig.customFields
    .inkeepCredentials as InkeepIdentifierSettings;
  const { colorMode } = useColorMode();

  const baseSettings: InkeepWidgetBaseSettings = {
    apiKey, // required
    integrationId, // required
    organizationId, // required
    organizationDisplayName: "Docusaurus",
    primaryBrandColor: "#2E8555",
    theme: {
      primaryColors: {
        textColorOnPrimary: "#000000",
      },
      colorMode: {
        forcedColorMode: colorMode,
      },
    },
  };

  const aiChatSettings: InkeepAIChatSettings = {
    botAvatarSrcUrl: "/img/logo.svg", // insert your own bot avatar, in public folder or hosted elsewhere.
    quickQuestions: [
      "Example question 1?",
      "Example question 2?",
      "Example question 3?",
    ],
    getHelpCallToActions: [
      {
        icon: { builtIn: "IoChatbubblesOutline" },
        name: "Forum",
        url: "https://www.your.io/forum",
      },
      {
        icon: { builtIn: "FaDiscord" },
        name: "Discord",
        url: "https://discord.com",
      },
      {
        icon: { builtIn: "FaSlack" },
        name: "Slack",
        url: "https://your.slack.com",
      },
    ],
  };

  const searchSettings: InkeepSearchSettings = {
    // optional settings
  };

  const modalSettings: InkeepModalSettings = {
    // optional settings
  };

  return { baseSettings, aiChatSettings, searchSettings, modalSettings };
};

export default useInkeepSettings;