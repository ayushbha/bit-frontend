import { cloneDeep, merge as mergeDeep } from 'lodash'
import { SAVE_TO_CACHE } from '../actionTypes'
import * as cacheTypes from '../../components/HOC/WithApiCache'

const initialState = {
	[cacheTypes.CACHE_TOPIC]: {},
	[cacheTypes.CACHE_MODULE]: {},
	[cacheTypes.CACHE_ACTIVITY]: {},
	[cacheTypes.CACHE_CARD]: {},
	[cacheTypes.CACHE_CHECKPOINT]: {},
	[cacheTypes.CACHE_CONCEPT]: {},
	[cacheTypes.CACHE_HINT]: {},

	[cacheTypes.CACHE_MODULE_PROGRESS]: {},
	[cacheTypes.CACHE_ACTIVITY_PROGRESS]: {},
	[cacheTypes.CACHE_HINT_PROGRESS]: {},
	[cacheTypes.CACHE_CHECKPOINTS_PROGRESS]: {}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_TO_CACHE: {
			const { merge } = action.options

			return {
				...state,
				[action.cacheType]: merge
					? mergeDeep(
							cloneDeep(state[action.cacheType]),
							cloneDeep(action.newLoads)
					  )
					: {
							...action.newLoads,
							...state[action.cacheType]
					  }
			}
		}

		default:
			return state
	}
}

export default reducer