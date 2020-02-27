/**
 * account
 */
export const AUTHENTICATE = 'AUTHENTICATE'
export const DEAUTHENTICATE = 'DEAUTHENTICATE'

/**
 * studentData
 */
export const SET_STUDENT_DATA = 'SET_STUDENT_DATA'
export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK'
export const SET_CURRENT_TOPIC = 'SET_CURRENT_TOPIC'
export const SET_SUGGESTED_ACTIVITY = 'SET_SUGGESTED_ACTIVITY'

export const INCREMENT_GEMS_BY = 'INCREMENT_GEMS_BY'
// export const SET_CURRENT_TOPIC_MODULES = "SET_CURRENT_TOPIC_MODULES";

/**
 * learnData
 */
/* initialization processes */
export const SET_ACTIVITY = 'SET_ACTIVITY'
export const SET_ACTIVITY_PROGRESS = 'SET_ACTIVITY_PROGRESS'
export const SET_UNLOCKED_CARDS = 'SET_UNLOCKED_CARDS'
export const SET_CARD_STATUSES = 'SET_CARD_STATUSES'

/* runtime processes */
export const SET_CARD = 'SET_CARD'
export const SET_HINT = 'SET_HINT'
export const SET_CURRENT_CARD_BY_INDEX = 'SET_CURRENT_CARD_BY_INDEX'
export const INCREMENT_CURRENT_CARD_INDEX = 'INCREMENT_CURRENT_CARD_INDEX'
export const SET_LAST_CARD_UNLOCKED_INDEX_BY_ID =
	'SET_LAST_CARD_UNLOCKED_INDEX_BY_ID'
export const INCREMENT_LAST_CARD_UNLOCKED_INDEX =
	'INCREMENT_LAST_CARD_UNLOCKED_INDEX'

export const BROADCAST_BUTTON_STATE = 'BROADCAST_BUTTON_STATE'
export const SCHEDULE_BUTTON_STATE = 'SCHEDULE_BUTTON_STATE'
export const RESET_BUTTON_STATE_SCHEDULE = 'RESET_BUTTON_STATE_SCHEDULE'

// @unused
export const SET_ALL_CARDS = 'SET_ALL_CARDS'

/**
 * viewManager
 */
export const SET_VIEW_STUDENT = 'SET_VIEW_STUDENT'

/**
 * Theme
 */
export const SET_THEME = 'SET_THEME'
