brain-gcd:
	node bin/brain-gcd.js
brain-calc: 
	node bin/brain-calc.js
brain-even: 
	node bin/brain-even.js
istall: 
	npm ci
brain-games: 
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .