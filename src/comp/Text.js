import './Layout.css'

export default function Text(p){
    console.log('layout props ',p)

    const setCurrentPage = (page) => {
        console.log(page)
        p.onChange(page)
    }

    const tabs = [
        { 
            name:'الرئيسية',
            number:1,
            asset:'home'
        },
        { 
            name:'المجموعات',
            number:2,
            asset:'group'
        },
        { 
            name:'الإعدادات',
            number:3,
            asset:'settings'
        },

    ]
    
  
    return (
      <div className="layout">
        <div style={{backgroundColor:'white',flex:1}}>
         {p.children}
        </div>
  
        <div class="footer">
            {
                tabs.map(tab=>(
                    <div  onClick={()=>setCurrentPage(tab.number)}>
                        {
                            p.currentPage === tab.number 
                            ? 
                            <>
                                <img src={`images/tabs/${tab.asset}_active.png`} alt="" />
                                <p style={{color:'orange'}} >{tab.name}</p>
                            </>

                            :
                            <>
                            <img src={`images/tabs/${tab.asset}.png`} alt="" />
                            <p style={{color:'black'}} >{tab.name}</p>
                            </>

                        }
                        {/* <p style={{color:p.currentPage === tab.number ?'orange':'black'}} >{tab.name}</p> */}
                    </div>
                ))
            }



        </div>
  
  
      </div>
    )
  }
