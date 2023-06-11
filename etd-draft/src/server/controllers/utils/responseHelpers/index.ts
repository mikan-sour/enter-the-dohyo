import { TApiError, TApiResponse } from "../../../../shared/types";
import sharedUtils from '../../../../shared/utils';

export function responseOK<T>(result:T):TApiResponse<T> {
    return { status: 'ok', result }
}

export function responseNOK<T>(err:unknown):TApiError {
    const error = sharedUtils.toError(err);
    return { status: 'nok', error }
}