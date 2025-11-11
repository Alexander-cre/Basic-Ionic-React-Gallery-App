import React from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";

import Gallery from "./pages/Gallery";
import ImageSliderView from "./pages/ImageSliderView";
import CategoryView from "./pages/Categoryview";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={Gallery} />
          <Route exact path="/category/:name" component={CategoryView} />
          <Route exact path="/slider/:name/:index" component={ImageSliderView} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
