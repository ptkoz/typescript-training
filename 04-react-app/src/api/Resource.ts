export interface Identity {
    firstName: string;
    lastName: string;
    address?: string;
    postCode?: string;
    city: string;
    birthDate: string;
}

export interface Salary {
    hourlyRate: number;
    currencyCode: string;
}

export interface Leave {
    daysAccrued: number;
    daysTaken: number | null;
}

enum ResourceStatus { Active, Disabled };
export interface Resource {
    id: number;
    status: ResourceStatus;
    identity: Identity;
    salary: Salary;
    leave: Leave;
}
