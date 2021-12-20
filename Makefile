fix:
	npx eslint . --fix

push:
	git add .
	git commit . -m 'Add $(m)'
	git push