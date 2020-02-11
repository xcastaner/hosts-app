import data from './host-app-data.json'

export default class Hosts {
    data: Data.Application[]
    hosts: Data.ObjHosts

    constructor(Apps: Data.Application[] = data) {
        this.data = Apps
        this.hosts = this.getAppsByHosts()
    }

    // O(n log n)
    private quickSort(list: Data.BasicApplication[]): Data.BasicApplication[] {
        if (list.length < 2) {
            return list
        }

        const pivot = list[0]
        const left = []
        const right = []
        for (let i = 1, total = list.length; i < total; i++) {
            if (list[i].apdex > pivot.apdex) {
                left.push(list[i])
            } else {
                right.push(list[i])
            }
        }
        return [
            ...this.quickSort(left),
            pivot,
            ...this.quickSort(right)
        ];
    }

    // O(n)
    private extractHosts(): string[] {
        return Array.from(new Set(this.data.reduce((result: string[], app) => {
            return [...result, ...app.host]
        }, [])))
    }

    // O(n2)
    private getAppsByHosts(): Data.ObjHosts {
        const arrayOfHosts: Data.Host[] = this.extractHosts().map((host: string) => {
            const applications: Data.BasicApplication[] = [];

            this.data.forEach((app: Data.Application) => {
                if (app.host.includes(host)) {
                    applications.push({
                        name: app.name,
                        version: app.version,
                        apdex: app.apdex || 0
                    })
                }
            })

            return {
                name: host,
                applications
            }
        })

        return this.arrayToObject(arrayOfHosts)
    }

    private arrayToObject(arrHost: Data.Host[]): Data.ObjHosts {
        return arrHost.reduce((obj, item) => {
            obj[item.name] = item
            return obj
        }, {} as Data.ObjHosts)
    }

    public getHosts(): Data.ObjHosts {
        return this.hosts
    }

    // O(1)
    public getTopAppsByHost(hostName: string): Data.Host {
        const host: Data.Host = { ...{}, ...this.hosts[hostName] }

        if (host.applications) {
            host.applications = this.quickSort(host.applications).slice(0, 25)
        }

        return host
    }

    public addAppToHost(id: string, app: Data.BasicApplication) {
        this.hosts[id].applications.push(app)
    }

    public removeAppToHost(id: string, appName: string) {
        const index = this.hosts[id].applications.findIndex((app) => app.name === appName)
        this.hosts[id].applications.splice(index, 1)
    }
}
