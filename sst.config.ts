import type { SSTConfig } from "sst";
import { AstroSite, Bucket } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "portfolio",
      region: "eu-central-1",
      profile: 'default',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {

      const bucket = new Bucket(stack, "public");
      
      const site = new AstroSite(stack, "site", {
        bind: [bucket],
        customDomain:{
          domainName: "f4bra.com",
          domainAlias: "www.f4bra.com",
        }
      });
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;





