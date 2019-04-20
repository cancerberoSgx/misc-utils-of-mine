Utilities for dealing / defining types in TypeScript.


## API

[API](api/README.md)


## Examples:


Example with array

Check given array length

```ts
type Manager = 'John'|'Chris'|'Laura'
type Developer = 'Sebastian'|'Andrew'|'Gabriel'
type Name = Manager|Developer

interface Person<N extends Name> {
  name: N
  age?: number
}

// we want to check that developers in a team has exactly the number they declare at compile time
interface Team<DeveloperCount extends number> {
  manager: Person<Manager>
  developers: ArrayLiteral<Person<Developer>, DeveloperCount>
 }

 // strictly check that given developers length corresponds to team's declaration
declare function setDevelopers<DeveloperCount extends number>(team: Team<DeveloperCount>, developers: ArrayLiteral<Person<Developer>, DeveloperCount>):void

declare var team2: Team<2>
declare var team1: Team<1>

// OK:
setDevelopers(team2, [{name: 'Sebastian'}, {name: 'Andrew'}])
setDevelopers(team1, [{name: 'Sebastian'}])

// fail to compile:
setDevelopers(team2, []) 
setDevelopers(team1, [{name: 'Sebastian'}, {name: 'Andrew'}])
```



// projects

https://github.com/kgtkr/typepark/blob/master/src/list.spec.ts
https://github.com/piotrwitek/utility-types#setdifferencea-b-same-as-exclude
https://github.com/Microsoft/TypeScript/issues/12215