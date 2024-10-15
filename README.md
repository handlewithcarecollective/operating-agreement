# Handle with Care Collective Operating Agreement

This repo contains the Handle with Care Collective's legally binding operating agreement. All members of the collective sign this agreement upon joining.

To propose changes to the agreement, simply open a pull request that modifies the relevant Markdown (`.md`) file. The requirements for approving changes to the agreement are specified in the agreement itself.

The agreement markdown contents should be authored such that each sentence is on its own line. This makes it much simpler to review changes to the document with standard line-based code review tools.

To test your changes locally, you will need `ruby`, `bundler`, and `jekyll` installed locally. For convenience, this repository includes a Nix flake, which can be used to enter a development environment with all of the needed tools available. If you have Nix installed on your machine, you can enter the development environment with `nix develop`. You can use `devenv up` to start the Jekyll server, once you've entered the dev environment. If you're not using the Nix flake, and have manually installed `ruby`, `bundler`, and `jekyll`, then you can run `bundle install` to install development dependencies, and `bundle exec jekyll serve` to start the development server.
