import type { Demo } from "./demos";
import { DARKMODESWITCHDEMO_DATA } from "@/pages/DemosPage/demo/DarkModeSwitchDemo/content";
import { CLAUDEFOLDERARTICLE_DATA } from "@/pages/DemosPage/demo/ClaudeFolderArticle/content";
import { REACTVIBEKICKOFFARTICLE_DATA } from "@/pages/DemosPage/demo/ReactVibeKickoffArticle/content";
import { UXFIVEELEMENTSARTICLE_DATA } from "@/pages/DemosPage/demo/UxFiveElementsArticle/content";

export const DEMOS: Demo[] = [
  ...UXFIVEELEMENTSARTICLE_DATA,
  ...REACTVIBEKICKOFFARTICLE_DATA,
  ...CLAUDEFOLDERARTICLE_DATA,
  ...DARKMODESWITCHDEMO_DATA,
];
