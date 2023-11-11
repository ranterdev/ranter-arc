deps:
	direnv reload
	docker compose up  -d

stop:
	docker-compose down

down: destroy
destroy:
	docker compose down -v
	docker compose rm -f
logs: 
	docker compose logs -f

.PHONY: deps stop down destroy logs