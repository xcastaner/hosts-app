import Hosts from '../hosts'

const mock = [
    {
        "name": "name1",
        "contributors": [''],
        "version": 7,
        "apdex": 5,
        "host": [
            "a",
            "b",
            "c",
            "d"
        ]
    },
    {
        "name": "name2",
        "contributors": [''],
        "version": 7,
        "apdex": 1,
        "host": [
            "a",
            "c"
        ]
    },
    {
        "name": "name3",
        "contributors": [''],
        "version": 7,
        "apdex": 10,
        "host": [
            "a",
            "b"
        ]
    }
]
const hosts = new Hosts(mock)
describe('Hosts service', () => {
    test('Should getTopAppsByHost method return the correct Data.Host object', () => {
        const host: Data.Host = hosts.getTopAppsByHost('c')
        const expected: Data.Host = {
            name: 'c',
            applications: [
                {
                    name: 'name1',
                    apdex: 5,
                    version: 7
                },
                {
                    name: 'name2',
                    apdex: 1,
                    version: 7
                }
            ]
        }
        expect(host).toEqual(expected)
    })
    test('Should getTopAppsByHost method return an object with applications sorted', () => {
        const host: Data.Host = hosts.getTopAppsByHost('c')
        const notSorted: Data.Host = {
            name: 'c',
            applications: [
                {
                    name: 'name2',
                    apdex: 1,
                    version: 7
                },
                {
                    name: 'name1',
                    apdex: 5,
                    version: 7
                }
            ]
        }
        expect(host).not.toEqual(notSorted)
    })
    test('Should after adding application getTopAppsByHost return correct host with new application', () => {
        hosts.addAppToHost('d', {
            name: 'name4',
            apdex: 8,
            version: 7
        })
        const host: Data.Host = hosts.getTopAppsByHost('d')
        const expected: Data.Host = {
            name: 'd',
            applications: [
                {
                    name: 'name4',
                    apdex: 8,
                    version: 7
                },
                {
                    name: 'name1',
                    apdex: 5,
                    version: 7
                }
            ]
        }
        expect(host).toEqual(expected)
    })
    test('Should after removing application getTopAppsByHost return correct host without application removed', () => {
        hosts.removeAppToHost('d', 'name4')
        const host: Data.Host = hosts.getTopAppsByHost('d')
        const expected: Data.Host = {
            name: 'd',
            applications: [
                {
                    name: 'name1',
                    apdex: 5,
                    version: 7
                }
            ]
        }
        expect(host).toEqual(expected)
    })
})