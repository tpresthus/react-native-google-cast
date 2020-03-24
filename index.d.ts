declare module 'react-native-google-cast' {
  import * as React from 'react'
  import { EventEmitter, ViewProps } from 'react-native'

  export type CastDevice = {
    id: string
    version: string
    name: string
    model: string
  }

  export type CastState =
    | 'NoDevicesAvailable'
    | 'NotConnected'
    | 'Connecting'
    | 'Connected'

  export type MediaTrack = {
    trackId: number,
    type: 'TEXT' | 'AUDIO' | 'VIDEO',
    trackContentId?: string,
    trackContentType?: string,
    name?: string,
    language?: string,
    subtype: 'SUBTITLES' | 'CAPTIONS' | 'DESCRIPTIONS' | 'CHAPTERS' | 'METADATA',
    customData?: Object
  }

  export type MediaInfo = {
    contentId: string,
    streamType: 'BUFFERED' | 'LIVE' | 'NONE',
    contentType?: string,
    duration: number,
    customData?: Object,
    entity?: string,

    metadata?: Object, // TODO: Create type
    tracks?: MediaTrack[],
    textTrackStyle?: TextTrackStyle
  }

  export type CastOptions = {
    mediaUrl: string
    title?: string
    subtitle?: string
    studio?: string
    imageUrl?: string
    posterUrl?: string
    contentType?: string
    streamDuration?: number
    playPosition?: number
    isLive?: boolean
    customData?: any
    textTrackStyle?: TextTrackStyle
  }

  export type TextTrackStyle = {
    backgroundColor?: string
    edgeColor?: string
    edgeType?: 'depressed' | 'dropShadow' | 'none' | 'outline' | 'raised'
    fontFamily?: string
    fontGenericFamily?:
      | 'casual'
      | 'cursive'
      | 'monoSansSerif'
      | 'monoSerif'
      | 'sansSerif'
      | 'serif'
      | 'smallCaps'
    fontScale?: number
    fontStyle?: 'bold' | 'boldItalic' | 'italic' | 'normal'
    foregroundColor?: string
    windowColor?: string
    windowCornerRadius?: number
    windowType?: 'none' | 'normal' | 'rounded'
  }

  const GoogleCast: {
    getCastDevice(): Promise<CastDevice>
    getCastState(): Promise<CastState>
    getMediaInfo(): Promise<MediaInfo>
    castMedia(options: CastOptions): void
    endSession(stopCast?: boolean): Promise<boolean>
    play(): void
    pause(): void
    stop(): void
    seek(playPosition: number): void
    launchExpandedControls(): void
    showIntroductoryOverlay(): void
    setVolume(volume: number): void
    initChannel(channel: string): Promise<boolean>
    sendMessage(message: string, namespace: string): Promise<boolean>
    showCastPicker(): void
    toggleSubtitles(enabled: boolean, languageCode?: string): Promise<void>

    EventEmitter: EventEmitter
    
    SESSION_STARTING: string
    SESSION_STARTED: string
    SESSION_START_FAILED: string
    SESSION_SUSPENDED: string
    SESSION_RESUMING: string
    SESSION_RESUMED: string
    SESSION_ENDING: string
    SESSION_ENDED: string
    
    MEDIA_STATUS_UPDATED: string
    MEDIA_PLAYBACK_STARTED: string
    MEDIA_PLAYBACK_ENDED: string
    MEDIA_PROGRESS_UPDATED: string
    
    CHANNEL_CONNECTED: string
    CHANNEL_DISCONNECTED: string
    CHANNEL_MESSAGE_RECEIVED: string
  }

  export default GoogleCast

  export class CastButton extends React.Component<ViewProps> {}
}
