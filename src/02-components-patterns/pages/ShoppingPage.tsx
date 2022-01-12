import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/'

const product = {
    id: '1',
    title: 'Coffee test',
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                
                <ProductCard product={product} > 
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product} > 
                    <ProductImage img={'./coffee-mug.png'} />
                    <ProductTitle title='TEST'/>
                    <ProductButtons/>
                </ProductCard>
            </div>
        </div>
    )
}
