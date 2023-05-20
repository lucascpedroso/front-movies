import { Container  } from '../../components/Button/styles'

export function Button({ title, icon: Icon, loading = false, ...rest }) {
    return(
        <Container 
            type="button"
            disabled={loading}
            {...rest}
        >
            {Icon && <Icon size={20} />}
            {loading ? "Loading..." : title }
        </Container>
    )
}