import { SetMetadata } from '../set-metadata';
import { COMMAND_METADATA } from '../constants';

export const Command = (params: any) => SetMetadata(COMMAND_METADATA, params);
