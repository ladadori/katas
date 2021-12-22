fix:
	npx eslint . --fix
	npx prettier --write . level_0/$(p)

push:
	git add .
	git commit . -m 'Add $(m)'
	git push