# Setup

Make sure you are in the right directory
- `cd dff-life`

Note: Using DOCKER_HOST over TCP (in home network)
- `env | grep DOCKER_HOST`

make sure to isntall dependencies
- `pnpm install`

make sure to have a `.env` file
- `cp .env.exmaple .env`

Start the database
- `pnpm db:start`

Start the server
- `pnpm dev`

To examine the DB:
- Check the container name
  `docker ps` (from where the DB was started)
  Note: If running the DB over the network (in the DOCKER_HOST), you may need to update UFW
- Connect to the container
  `docker exec -it <name> bash` (e.g. `dff-life-db-1`)
- List all DBs
  `psql -l`
- Load `local` DB
  `psql -d local`
- List all sessions and users
  `select * from session;`
  `select * from user;`

## TODO

Translations
- TBD
- Still need to figure out if we need to create functions for each strings
- This conversation with Gemini should help
  - https://g.co/gemini/share/62c5f344d4bb

Testing
- Still need to figure out how to get testing done

All `package.json#scripts` should work :'(
