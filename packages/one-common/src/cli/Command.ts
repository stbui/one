import { SetMetadata } from '../set-metadata';
import { COMMAND_METADATA } from '../constants';

export interface CommandMetadata {
    /**
     * 配置命令名称
     */
    name: string;
    /**
     * 描述作用
     */
    description?: string;
    /**
     * 使用示例
     */
    example?: {
        command: string;
        description: string;
    };
}

/**
 * 定义命令行配置元数据
 * @param metadata
 */
export const Command = (metadata: CommandMetadata) => {
    return SetMetadata(COMMAND_METADATA, metadata);
};
