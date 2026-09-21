/**
 * Thin analytics layer.
 *
 * Analytics is entirely optional: when NEXT_PUBLIC_GOOGLE_ANALYTICS_ID is not
 * set, no script is loaded and `trackEvent` becomes a no-op. Tracking never
 * blocks navigation — events are fired and the click proceeds regardless.
 */

export type AnalyticsEvent =
  | "download_app_click"
  | "app_download_google_play"
  | "app_download_app_store"
  | "material_category_click"
  | "contact_click";

type GtagWindow = Window & {
  gtag?: (command: string, ...args: unknown[]) => void;
};

export function trackEvent(
  event: AnalyticsEvent,
  params: Record<string, string> = {},
): void {
  if (typeof window === "undefined") return;

  try {
    const { gtag } = window as GtagWindow;
    gtag?.("event", event, params);
  } catch {
    // Analytics must never break the user interaction.
  }
}
