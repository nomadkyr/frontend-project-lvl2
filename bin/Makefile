install:
	npm ci

lint:
	npx eslint .

test: 
	npx jest

publish:
	npm publish --dry-run
	npm link
	
test-coverage: # 
	npm test -- --coverage --coverageProvider=v8

test-watch: # 
	npm test -- --watchAll

gendiff: 
node bin/gendiff.js
