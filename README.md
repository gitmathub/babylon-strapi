# Babylon CMS

This is the CMS for the homepage of [Babylon Metropolis Verlag](https://www.babylon-metropolis.de).

## Installing

```sh
nvm use
npm i
npm run build
npm run start
```

## Starting

- node `version >= 10` is required

```bash
$ node -v
v8.16.0
$ nvm use stable
Now using node v12.10.0 (npm v6.10.3)
```
## Add a new publication

1. Move into the folder and start the cms
```bash
cd babylon-strapi
nvm use
npm run develop
```

2. Open the browser and login. ```http://localhost:65332/admin``` 
3. Add you publication.
4. Change to the sitegenerator and generate
```bash
cd bablyon-gatsby
nvm use
npm run build
```

5. Copy the deployment to online

```bash
mv public babylon-metropolis-202212181200
tar czf babylon-metropolis-202212181200.tgz babylon-metropolis-202212181200
scp babylon-metropolis-202212181200.tgz superlea@maury.uberspace.de:~/virtual/ 
```

7. SSH to server and switch to new deployment

```bash
ssh superlea@maury.uberspace.de
cd virtual
tar xzf babylon-metropolis-202212181200.tgz
cd html
rm babylon-metropolis
ln -s ../babylon-metropolis-202212181200 babylon-metropolis
```

8. In the browser: check if your modifications are there. [babylon-metropolis.com](https://babylon-metropolis.com)



## Credits

The CMS is based on [strapi](https://strapi.io). An awesome opensource and free CMS, that you can install on your own machine. Simple and easy.
