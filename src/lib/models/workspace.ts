import type { Role } from './role';
import type { WorkspaceStatus } from './status';
import type { User } from './user';

export interface Workspace {
    id: string;
    statuses?: WorkspaceStatus[];
}

export interface WorkspaceMember {
    createdTime: string;
    updatedTime: string;
    id: number;
    userId: string;
    user?: User;
    roleId: number;
    role?: Role;
    workspaceId: string;
    workspace?: Workspace;
}
