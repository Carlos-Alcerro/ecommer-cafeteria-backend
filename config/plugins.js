module.exports = {
  "strapi-neon-tech-db-branches": {
    enabled: true,
    config: {
      neonApiKey:
        "5c1zllalidm0cv4y8o40p23w4svsl4c2t56ivxm6pev7atwqxhuqwf3g3nmpgj42",
      neonProjectName: "ecommerce", // the neon project under wich your DB runs
      neonRole: "db-ecommerce_owner", // create it manually under roles for your project first
      gitBranch: "main",
    },
  },
};
