const axios = require ('axios')
const fetch = async (uf,name,region,state) => {
    const response = await axios ('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
    const cities = response.data
    let data = cities.map((city) => {
        return {
            id: city.id,
            name: city.nome,
            state: city.microrregiao.mesorregiao.UF.nome,
            uf: city.microrregiao.mesorregiao.UF.sigla,
            region: city.microrregiao.mesorregiao.UF.regiao.nome,
        }

    })

    if (uf) data=filterByUf(data, uf)
    
    if (name) data=filterByName(data,name)
    
    if (region) data=filterByRegion(data, region)
    
    if (state) data=filterByState(data, state)
    
    return data
}


const filterByName = (data, name) => {
    return data.filter((city) => city.name.toLowerCase().includes(name.toLowerCase()))
}
const filterByUf = (data, uf) => {
    return data.filter((city) => city.uf === uf)
}
const filterByRegion = (data, region) => {
    return data.filter((city) => city.region.toLowerCase().includes(region.toLowerCase()))
}
const filterByState = (data, state) => {
    return data.filter((city) => city.state.toLowerCase().includes(state.toLowerCase()))
}

module.exports.fetch = fetch