# commit-if-dirty

commit-if-dirty is stupid simple library to make a git commit if repo is dirty.

## Usage

```bash
npx -y github:pm-in-dss/commit-if-dirty
```

## Use case

### On CI, commit if prettier writes any changes

```bash
npx prettier --write .

npx -y github:pm-in-dss/commit-if-dirty
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)
