<script>
    import { navigate } from 'svelte-routing';
    import Body from '../lib/Body.svelte';
    import Heading from '../lib/Heading.svelte';
    import CanabisImage from './../assets/canabis.svg'
    import Logo from './../assets/logo.svg'
    import { t } from 'svelte-intl-precompile';
    import { currentPage } from '../stores/store';

    let props = $props()

    const onSwitchPage = (page) => {
        currentPage.set(page)
        navigate('/' + page)
    }
</script>

<div class="HomePage">
    <div class="HomeContainer">
        <div class="HomeContent">
            <div class="ContentItems">
                <div class="ContentItem" onclick={()=>{onSwitchPage('shop')}}>
                    <Heading size={'h2'}>{$t('nav.shop')}</Heading>
                    <Body uppercase>{$t('home.shop')}</Body>
                </div>
                <div class="ContentItem" onclick={()=>{onSwitchPage('about')}}>
                    <Heading size={'h2'}>{$t('nav.about')}</Heading>
                    <Body uppercase>{$t('home.about')}</Body>
                </div>
            </div>
        </div>
        <div class="HomeContent">
            <div class="HomeBackground">
                <img src={CanabisImage} alt="Marie jeane">
            </div>
            <div class="Logo">
                <img src={Logo} alt="Marie jeane">
            </div>
        </div>
        <div class="HomeContent">
            <div class="ContentItems right">
                <div class="ContentItem" onclick={()=>{onSwitchPage('faq')}}>
                    <Heading size={'h2'} right>{$t('nav.faq')}</Heading>
                    <Body right uppercase>{$t('home.faq')}</Body>
                </div>
                <div class="ContentItem" onclick={()=>{onSwitchPage('contact')}}>
                    <Heading size={'h2'} right>{$t('nav.contact')}</Heading>
                    <Body right uppercase>{$t('home.contact')}</Body>
                </div>
            </div>
        </div>
    </div>
</div>


<style lang="scss">
    .HomePage{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;

        .HomeContainer{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .HomeContent{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
                height: 600px;

                .HomeBackground{
                    position: absolute;
                    left: 50%;
                    z-index: 1;
                    top: 50%;
                    height: 700px;
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    filter: drop-shadow(0 0 200px rgba(30, 175, 42, 0.644));
                    opacity: .4;

                    img{
                        height: 100%;
                        pointer-events: none;
                    }
                }

                .ContentItems{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-direction: column;
                    
                    .ContentItem{
                        width: 200px;
                        cursor: pointer;
                        transition: all .2s ease-in-out;

                        &:hover{
                            transform: scale(1.05);
                            filter: drop-shadow(0 0 50px rgb(10, 187, 25));
                        }
                    }
                }

                .Logo{
                    z-index: 100;
                    width: 800px;
                    height: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img{
                        height: 100%;
                        pointer-events: none;
                    }
                }
            }
            
            @media screen and (max-width:1300px){
                .HomeContent{
                    .Logo{
                        width: 550px;
                    }
                }
            }

            @media screen and (max-width:1024px){
                .HomeContent{
                    .ContentItems{
                        .ContentItem{
                            display: none;
                        }
                    }
                }
            }

            @media screen and (max-width:800px){
                .HomeContent{
                    .HomeBackground{
                        height: 500px;
                    }
                    .Logo{
                        height: 300px;
                    }
                }
            }

            @media screen and (max-width:550px){
                .HomeContent{
                    .HomeBackground{
                        height: 350px;
                    }
                    .Logo{
                        height: 200px;
                    }
                }
            }

            @media screen and (max-width:385px){
                .HomeContent{
                    .HomeBackground{
                        height: 300px;
                    }
                    .Logo{
                        height: 175px;
                    }
                }
            }

            @media screen and (max-height:850px) and (min-width:800px){
                .HomeContent{
                    .ContentItems{
                        .ContentItem{
                            display: none;
                        }
                    }
                    .HomeBackground{
                        height: 500px;
                    }
                    .Logo{
                        height: 300px;
                    }
                }
            }

            @media screen and (max-height:650px) and (min-width:550px){
                .HomeContent{
                    height: 100%;
                    .HomeBackground{
                        height: 350px;
                    }
                    .Logo{
                        height: 200px;
                    }
                }
            }

            @media screen and (max-height:500px){
                .HomeContent{
                    .HomeBackground{
                        height: 300px;
                    }
                    .Logo{
                        height: 175px;
                    }
                }
            }
        }
    }
</style>