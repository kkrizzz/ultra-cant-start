import React from "react";
import { SWRConfig } from "swr";
import { Link, Route, Switch } from "wouter";
import { Helmet } from "react-helmet";
import ultraCache from "ultra/cache";
import { Cache } from "ultra/types";

const options = (cache: Cache) => ({
  provider: () => ultraCache(cache),
  suspense: true,
});

const Ultra = ({ cache }: { cache: Cache }) => {
  return (
    <SWRConfig value={options(cache)}>
      <Helmet>
        <title>Ultra</title>
      </Helmet>
      <main>
        <Switch>
          <Route path="/">
            <h1>Homepage</h1>
          </Route>
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </main>
    </SWRConfig>
  );
};

export default Ultra;
