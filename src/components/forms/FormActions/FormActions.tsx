import { type ReactElement } from 'react';
import ErrorMessage from '@client-components/forms/ErrorMessage/ErrorMessage';
import Button from '@client-components/Button/Button';
import Separator from '@client-components/Separator/Separator';
import GoogleIcon from '@client-components/icons/GoogleIcon';
import Loader from '@client-components/Loader/Loader';
import './form-actions.scss';

type FormActionsProps = {
    text: string;
    loading?: boolean;
    globalError?: string;
    showAuthProviders?: boolean;
};

function FormActions(props: FormActionsProps): ReactElement {
    const {
        text,
        loading = false,
        globalError = undefined,
        showAuthProviders = false
    } = props;

    if (loading) return <Loader />;

    const isRegister = text.toLowerCase().includes('inscrire');
    const googleText = isRegister ? "S'inscrire avec Google" : 'Se connecter avec Google';

    return (
        <div className='form-actions'>
            {globalError && <ErrorMessage>{globalError}</ErrorMessage>}
            <Button type='submit'>{text}</Button>
            {showAuthProviders && (
                <>
                    <Separator text='ou' />
                    <Button icon={<GoogleIcon />} variant="secondary">
                        {googleText}
                    </Button>
                </>
            )}
        </div>
    );
}

export default FormActions;