import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginForm} />
    <Route path="/products" component={Products} />
    <Route path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
)

export default App