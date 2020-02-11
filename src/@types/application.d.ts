declare namespace Data {
    type Application = {
        name: string;
        contributors: string[];
        version: number;
        apdex: number;
        host: string[];
    }

    type BasicApplication = {
        name: string;
        version: number;
        apdex: number;
    }

    type Host = {
        name: string;
        applications: BasicApplication[];
    }

    type ObjHosts = {
        [host: string]: Data.Host
    }
}
