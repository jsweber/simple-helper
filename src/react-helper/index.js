import React from 'react'

//异步加载组件
/*
    importCmp为import函数
    ()=> import(path)
*/
export const asyncImportCmp = importCmp => {
    class AsyncCmp extends React.Component{
        state = {
            C: null
        }

        async componentDidMount(){
            const {default: compnent} = await importCmp()
            this.setState({
                C: compnent
            })
        }

        render(){
            const {C} = this.state

            return C ? <C {...this.props}/> : null
        }

    }

    return AsyncCmp
}

