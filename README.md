# commit-if-dirty

commit-if-dirty is stupid simple libary to make a commit if repo is dirty.

## Use case

### On CI, commit if prettier writes an changes

```bash
npx prettier --write .

npx -y github:pm-in-dss/commit-if-dirty
```

## Usage

```bash
npx -y github:pm-in-dss/commit-if-dirty
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)