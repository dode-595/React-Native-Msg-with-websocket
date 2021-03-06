export const DATA_POLL_INTERVAL_MS = 10000

export const DISCONNECT_MESSAGE = 'DISCONNECT'

export const EVENT_TYPE = {
  AUTO_JOINED_ROOM: 'AUTO_JOINED_ROOM',
  MESSAGE_INLINE: 'MESSAGE_INLINE',
  MESSAGE_INLINE_E2EE: 'MESSAGE_INLINE_E2EE',
  MESSAGE_DELIVERED: 'MESSAGE_DELIVERED',
  FILE_GET_E2EE: 'FILE_GET_E2EE',
  ROOM_UPDATE: 'ROOM_UPDATE',
  WEBRTC_OFFER: 'WEBRTC_OFFER',
  WEBRTC_ANSWER: 'WEBRTC_ANSWER',
  WEBRTC_END_CALL: 'WEBRTC_END_CALL',
  WEBRTC_ANNOUNCE_EVENT: 'WEBRTC_ANNOUNCE_EVENT',
  WEBRTC_ANNOUNCE_REMOTE_VIDEO_TOGGLE: 'WEBRTC_ANNOUNCE_REMOTE_VIDEO_TOGGLE',
  WEBRTC_CALL_DELIVERED: 'WEBRTC_CALL_DELIVERED',
  ROOM_LEAVE: 'ROOM_LEAVE'
}

export const ROOM_UPDATE_TYPE = {
  STARTED_TYPING: 'STARTED_TYPING',
  STOPPED_TYPING: 'STOPPED_TYPING',
  STARTED_TYPING_E2EE: 'STARTED_TYPING_E2EE',
  STOPPED_TYPING_E2EE: 'STOPPED_TYPING_E2EE',
  MEMBERSHIP_CHANGE: 'MEMBERSHIP_CHANGE'
}

export const IMAGE_MIME_TYPES = {
  'image/gif': true,
  'image/png': true,
  'image/jpg': true,
  'image/jpeg': true
}
