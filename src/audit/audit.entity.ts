import { timestamp } from 'rxjs';
import { Table, Column, Model } from 'sequelize-typescript';

@Table({
    tableName: 'audit_log',
    timestamps: true
})
export class AuditLog extends Model {
    // Achive 엔진을 사용하므로 Auto Increment 를 사용할 수 없다.
    // id 는 sequelize 에서 자동으로 생성해주는 필드이므로 선언하지 않는다.
    @Column({
        type: 'bigint',
        defaultValue: 0,
        field: 'TENANT_PK',
    })
    tenantPk: number;
    
    @Column({
        type: 'tinyint',
        defaultValue: true,
        field: 'VISIBLE_YN',
    })
    visibleYn: boolean;

    @Column({
        type: 'integer',
        defaultValue: 0,
        field: 'HTTP_STATUS',
    })
    httpStatus: number;

    @Column({
        type: 'nvarchar(16)',
        defaultValue: 0,
        field: 'HTTP_METHOD',
    })
    httpMethod: string;

    @Column({
        type: 'nvarchar(64)',
        defaultValue: null,
        field: 'AGENT_OS',
    })
    agentOs: string;

    @Column({
        type: 'nvarchar(16)',
        defaultValue: null,
        field: 'AGENT_OS_VERSION',
    })
    agentOsVersion: string;

    @Column({
        type: 'nvarchar(64)',
        defaultValue: null,
        field: 'AGENT_BROWSER',
    })
    agentBrowser: string;

    @Column({
        type: 'nvarchar(16)',
        defaultValue: null,
        field: 'AGENT_BROWSER_VERSION',
    })
    agentBrowserVersion: string;

    @Column({
        type: 'nvarchar(128)',
        defaultValue: null,
        field: 'AGENT_DEVICE',
    })
    agentDevice: string;


    @Column({
        type: 'nvarchar(256)',
        defaultValue: 0,
        field: 'REQUEST_URI',
    })
    requestUri: string;

    @Column({
        type: 'char(45)',
        defaultValue: 0,
        field: 'REQUEST_IP',
    })
    requestIp: string;

    @Column({
        type: 'nvarchar(32)',
        defaultValue: 0,
        field: 'REQUEST_CONTENT_TYPE',
    })
    requestContentType: string;

    @Column({
        type: 'longtext',
        defaultValue: null,
        field: 'REQUEST_PAYLOAD',
    })
    requestPayLoad: string;

    @Column({
        type: 'nvarchar(32)',
        defaultValue: null,
        field: 'RESPONSE_CONTENT_TYPE',
    })
    responseContentType: string;

    @Column({
        type: 'longtext',
        defaultValue: null,
        field: 'RESPONSE_PAYLOAD',
    })
    responsePayLoad: string;

    @Column({
        type: 'bigint',
        field: 'CREATED_DATE',
    })
    createdDate: number;

    @Column({
        type: 'bigint',
        defaultValue: null,
        field: 'USER_PK',
    })
    userPk: number;

    @Column({
        type: 'nvarchar(128)',
        defaultValue: null,
        field: 'USER_ID',
    })
    userId: string;

    @Column({
        type: 'nvarchar(128)',
        defaultValue: null,
        field: 'USER_EMAIL',
    })
    userEmail: string;

    @Column({
        type: 'nvarchar(64)',
        defaultValue: null,
        field: 'USER_NAME',
    })
    userName: string;

    @Column({
        type: 'bigint',
        defaultValue: null,
        field: 'TEAM_PK',
    })
    teamPk: number;

    @Column({
        type: 'nvarchar(128)',
        defaultValue: null,
        field: 'TEAM_NAME',
    })
    teamName: string;

    @Column({
        type: 'bigint',
        defaultValue: null,
        field: 'MENU_UID',
    })
    menuUid: number;

    @Column({
        type: 'nvarchar(128)',
        defaultValue: null,
        field: 'MENU_NAME',
    })
    menuName: string;

    @Column({
        type: 'bigint',
        defaultValue: null,
        field: 'API_UID',
    })
    apiUid: number;

    @Column({
        type: 'nvarchar(256)',
        defaultValue: null,
        field: 'API_NAME',
    })
    apiName: string;

    @Column({
        type: 'longtext',
        defaultValue: null,
        field: 'ERROR_DATA',
    })
    errorData: string;
}