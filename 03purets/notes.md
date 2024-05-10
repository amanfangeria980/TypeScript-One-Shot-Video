tsc --init
create index.html
create 2 folders: src,dist
in src create index.ts
embed the dist wala js in index.html
in tsconfig file, outDir set to dist

tsc -w

npm init -y

we can now use nodemon ya lite-server ya live server

script->
"start": "lite-server"

npm start

in new terminal
tsc -w
