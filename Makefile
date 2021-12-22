fix:
	npx eslint . --fix
	npx prettier --write .

push:
	git add .
	git commit . -m 'Add $(m)'
	git push