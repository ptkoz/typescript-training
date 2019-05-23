export interface Identity {
    // implement me
}

export interface Salary {
    // implement me
}

enum ResourceStatus { Active, Disabled };
export interface Resource {
    status: ResourceStatus;
    identity: Identity;
    salary: Salary;
}

export interface ApiInterface {
    getResources(uri: string): Promise<Resource[]>;
}
