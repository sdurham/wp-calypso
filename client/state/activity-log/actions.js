/** @format */
/**
 * Internal dependencies
 */
import {
	ACTIVITY_LOG_FILTER_SET,
	ACTIVITY_LOG_FILTER_UPDATE,
	REWIND_ACTIVATE_FAILURE,
	REWIND_ACTIVATE_REQUEST,
	REWIND_ACTIVATE_SUCCESS,
	REWIND_CLONE,
	REWIND_DEACTIVATE_FAILURE,
	REWIND_DEACTIVATE_REQUEST,
	REWIND_DEACTIVATE_SUCCESS,
	REWIND_RESTORE,
	REWIND_RESTORE_DISMISS,
	REWIND_RESTORE_DISMISS_PROGRESS,
	REWIND_RESTORE_PROGRESS_REQUEST,
	REWIND_RESTORE_REQUEST,
	REWIND_RESTORE_UPDATE_PROGRESS,
	REWIND_BACKUP,
	REWIND_BACKUP_REQUEST,
	REWIND_BACKUP_DISMISS,
	REWIND_BACKUP_PROGRESS_REQUEST,
	REWIND_BACKUP_UPDATE_ERROR,
	REWIND_BACKUP_UPDATE_PROGRESS,
	REWIND_BACKUP_DISMISS_PROGRESS,
} from 'state/action-types';

import 'state/data-layer/wpcom/sites/rewind/downloads';

/**
 * Turn the 'rewind' feature on for a site.
 *
 * @param  {String|number} siteId      Site ID
 * @param  {bool}          isVpMigrate Whether this is a VaultPress migration.
 * @return {Object}        Action object
 */
export function activateRewind( siteId, isVpMigrate ) {
	return {
		type: REWIND_ACTIVATE_REQUEST,
		siteId,
		isVpMigrate,
	};
}

export function rewindActivateSuccess( siteId ) {
	return {
		type: REWIND_ACTIVATE_SUCCESS,
		siteId,
	};
}

export function rewindActivateFailure( siteId ) {
	return {
		type: REWIND_ACTIVATE_FAILURE,
		siteId,
	};
}

/**
 * Turn the 'rewind' feature off for a site.
 *
 * @param {String|number} siteId site ID
 * @return {Object} action object
 */
export function deactivateRewind( siteId ) {
	return {
		type: REWIND_DEACTIVATE_REQUEST,
		siteId,
	};
}

export function rewindDeactivateSuccess( siteId ) {
	return {
		type: REWIND_DEACTIVATE_SUCCESS,
		siteId,
	};
}

export function rewindDeactivateFailure( siteId ) {
	return {
		type: REWIND_DEACTIVATE_FAILURE,
		siteId,
	};
}

/**
 * Request a restore to a specific Activity.
 *
 * @param  {string|number} siteId Site ID
 * @param  {number}        activityId Activity ID
 * @return {Object}        action object
 */
export function rewindRequestRestore( siteId, activityId ) {
	return {
		type: REWIND_RESTORE_REQUEST,
		siteId,
		activityId,
	};
}

/**
 * Dismiss a restore request.
 *
 * @param  {string|number} siteId Site ID
 * @return {Object}        action object
 */
export function rewindRequestDismiss( siteId ) {
	return {
		type: REWIND_RESTORE_DISMISS,
		siteId,
	};
}

/**
 * Restore a site to the given timestamp.
 *
 * @param {String|number} siteId the site ID
 * @param {number} timestamp Unix timestamp to restore site to
 * @return {Object} action object
 */
export function rewindRestore( siteId, timestamp ) {
	return {
		type: REWIND_RESTORE,
		siteId,
		timestamp,
	};
}

export function rewindClone( siteId, timestamp, payload ) {
	return {
		type: REWIND_CLONE,
		siteId,
		timestamp,
		payload,
	};
}

export function dismissRewindRestoreProgress( siteId ) {
	return {
		type: REWIND_RESTORE_DISMISS_PROGRESS,
		siteId,
	};
}

export function getRewindRestoreProgress( siteId, restoreId ) {
	return {
		type: REWIND_RESTORE_PROGRESS_REQUEST,
		siteId,
		restoreId,
	};
}

export function updateRewindRestoreProgress( siteId, timestamp, restoreId, progress ) {
	return {
		type: REWIND_RESTORE_UPDATE_PROGRESS,
		...progress,
		restoreId,
		siteId,
		timestamp,
	};
}

/**
 * Request a backup up to a specific Activity.
 *
 * @param  {string|number} siteId Site ID
 * @param  {number}        rewindId Rewind ID
 * @return {Object}        action object
 */
export function rewindRequestBackup( siteId, rewindId ) {
	return {
		type: REWIND_BACKUP_REQUEST,
		siteId,
		rewindId,
	};
}

/**
 * Dismiss a backup request.
 *
 * @param  {string|number} siteId Site ID
 * @return {Object}        action object
 */
export function rewindBackupDismiss( siteId ) {
	return {
		type: REWIND_BACKUP_DISMISS,
		siteId,
	};
}

/**
 * Create a backup of the site up the given rewind id.
 *
 * @param  {string|number} siteId   The site ID
 * @param  {number}        rewindId Id of activity up to the one the backup will be created.
 * @return {object}                 Action object
 */
export function rewindBackup( siteId, rewindId ) {
	return {
		type: REWIND_BACKUP,
		siteId,
		rewindId,
	};
}

/**
 * Check progress of backup creation for the a given download id.
 *
 * @param  {string|number} siteId The site ID
 * @return {object}               Action object
 */
export function getRewindBackupProgress( siteId ) {
	return {
		type: REWIND_BACKUP_PROGRESS_REQUEST,
		siteId,
	};
}

/**
 * Update the status of the backup creation with its progress.
 *
 * @param  {string|number} siteId     The site ID
 * @param  {number}        downloadId Id of the backup being created.
 * @param  {number}        progress   Number from 0 to 100 that indicates the progress of the backup creation.
 * @return {object}                   Action object
 */
export function updateRewindBackupProgress( siteId, downloadId, progress ) {
	return {
		type: REWIND_BACKUP_UPDATE_PROGRESS,
		...progress,
		downloadId,
		siteId,
	};
}

/**
 * Update the status of the backup creation when it errors.
 *
 * @param  {string|number} siteId     The site ID
 * @param  {number}        downloadId Id of the backup being created.
 * @param  {object}        error      Info about downloadable backup and error.
 * @return {object}                   Action object
 */
export function rewindBackupUpdateError( siteId, downloadId, error ) {
	return {
		type: REWIND_BACKUP_UPDATE_ERROR,
		siteId,
		downloadId,
		...error,
	};
}

/**
 * Remove success banner.
 *
 * @param  {string|number} siteId     The site ID
 * @param  {number}        downloadId Id of the backup being dismissed.
 * @return {object}                   Action object
 */
export function dismissRewindBackupProgress( siteId, downloadId ) {
	return {
		type: REWIND_BACKUP_DISMISS_PROGRESS,
		siteId,
		downloadId,
	};
}

export const setFilter = ( siteId, filter ) => ( {
	type: ACTIVITY_LOG_FILTER_SET,
	siteId,
	filter,
} );

export const updateFilter = ( siteId, filter ) => ( {
	type: ACTIVITY_LOG_FILTER_UPDATE,
	siteId,
	filter,
} );
