import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/search.css'
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Fade } from 'react-bootstrap';
import _ from 'underscore';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import Params from '../helpers/params.json'
import TableFetch from './table';
import Spinner from './spinner';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      param: 'cod',
      isFetching: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleParam = this.handleParam.bind(this);
    this.handleFetching = this.handleFetching.bind(this);
    this.handleFade = this.handleFade.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleParam(e) {
    this.setState({
      param: e.target.value
    })
  }

  handleSelect() {
    return _.map(Params.params, (param, k) => {
      return <option value={k} key={k}>{param}</option>
    })
  }

  handleFetching() {
    this.setState({ isFetching: !this.state.isFetching })
  }

  handleFade() {
    this.setState({
      open: !this.state.open
    })
  }

  handleSearch(e) {
    const URL_FETCH = 'http://dadosabertos.almg.gov.br/ws/prestacao_contas/contratos/pesquisa';
    const URL_PARAM = this.state.param
    const URL_FORMAT = 'formato=json'
    const URL_SEARCH = this.state.value

    this.props.fetchData(null)

    this.handleFetching()

    axios.get(`${URL_FETCH}?${URL_PARAM}=${URL_SEARCH}&${URL_FORMAT}`)
      .then(response => {
        let fetchResult = response.data

        _.isObject(fetchResult)
          ? false
          : fetchResult = JSON.parse(fetchResult.replace(/(,\b)+/g, '.').trim());

        this.props.fetchData(fetchResult)

        _.size(this.props.data.dataSearch.list) === 0
          ? this.setState({ message: 'Desculpe, a pesquisa não encontrou nenhum resultado' })
          : this.setState({ message: '' })

        this.handleFetching()

        return fetchResult;
      })
      .catch((error) => {
        this.setState({
          message: 'Desculpe, a pesquisa não encontrou nenhum resultado'
        });

        this.handleFetching()

        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <Form
          onSubmit={
            (e) => {
              e.preventDefault()
              this.handleSearch()
            }
          }
          inline>
          <FormGroup className="formSearch">
            <ControlLabel>
              Tipo de pesquisa:
            </ControlLabel>
            {' '}
            <FormControl
              componentClass="select"
              onChange={this.handleParam}
            >
              {
                this.handleSelect()
              }
            </FormControl>
            {' '}
            <FormControl
              type="text"
              value={this.state.value}
              placeholder='Digite sua pesquisa...'
              onChange={this.handleChange} />
            {' '}
            <Button
              className="btn btn-danger"
              type="submit">
              Pesquisar
            </Button>
            <HelpBlock>{this.state.message}</HelpBlock>
          </FormGroup>
        </Form>
        {
          this.props.data.dataSearch !== null
            ? (this.state.open,
            _.map(this.props.data.dataSearch.list, (data, key) => {
              return <Fade in={this.state.open} key={key}><TableFetch
                data={data}
                key={key}
              >
              </TableFetch></Fade>
            }))
            : false
        }
        {
          this.state.isFetching === true
            ? <Spinner
              className='spinnerFetching'
              name='spinner'
              size='3x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
            : false
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, { fetchData })(Search)
