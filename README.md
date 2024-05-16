# ProjectCrudAngular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

Product registration project, with academic purposes, to learn about Angular fundamentals, its organization, components, file patterns, custom tags and CRUD methods.

First step will be to install the Angular CLI: 
$ npm install -g @angular/cli

Then create the project: (ng new "project name") 
$ ng new project_crud_angular

Note: Here we can pass options like --"minimal" for a small project, but its characteristic is to combine the HTML and CSS inside the TypeScript file, which in my opinion ends up visually "dirtying" the code. It´s possible separate them later with a change in angular.json file.

When installing, I chose the CSS style, SSR/SSG-yes.
Note: I had to change the script execution security policy in powershell to run ng new.

# PT-BR
Projeto de cadastro de produtos, com finalidade acadêmica, para aprender os fundamentos de Angular, sua organização, componentes, padrões de arquivos, Tags customizadas e métodos CRUD.

Primeiro passo será instalar o Angular CLI:
$ npm i -g @angular/cli

Em seguida criar o projeto: (ng new "nome do projeto")
ng new project_crud_angular

Nota: Aqui podemos passar opções como --"minimal" para um projeto pequeno, porém tem por característica unir os arquivos HTML e CSS dentro do arquivo TypeScript, o que ao meu ver acaba "sujando" visualmente o código. É possível separá-los posteriormente com uma alteração no arquivo angular.json.

Na instalação escolhi o style CSS, SSR/SSG-yes.
Nota: Tive que alterar no powershell a política de segurança de execução de scripts para executar o ng new.


# Pattern readme
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
