import Head from 'next/head'
export default function AudioBufferOptions(){
    return(
        <>
        <div className='container mx-auto px-10 mb-8'>
        <div className="mx:auto px-12 dark:bg-gray-900 dark:text-gray-100">
            <div className='mb-8 md:space-y-0 md:space-x-6 md:flex-row text-3xl font-bold'>關於作者</div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
            <div className="flex flex-col">
                <h4 className="text-lg font-semibold text-center md:text-left">Lok</h4>
                <p className="dark:text-gray-400 tracking-widest">
                    一個鍾情於音樂嘅人 / IT狗 / Indie仔
                </p>
                <p className='dark:text-gray-400 tracking-widest'>
                    除咗係呢個網嘅製作者,仲係一個keep住執譜嘅結他佬
                </p>
                <p className='dark:text-gray-400 tracking-widest'>
                    My Instagram:
                </p>
                <p className='dark:text-gray-400 tracking-widest'>
                    My Youtube Channel:
                </p>
		    </div>
	    </div>
        </div>
        </div>
        <div className='divider'/>
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <title>TaiShow</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='mx:auto px-12 dark:bg-gray-900 dark:text-gray-100'>
                <p className="mb-3  dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                    睇騷是一個資源整合的網站,其唯一目標是提供一個平台令人快速查看近期有咩show睇
                </p>
                <p className=" dark:text-gray-400 first-line:tracking-widest">由於網站內的post都係由我自己手動copy落嚟的,所以可能會有所缺失,如果你係活動搞手,歡迎透過以下方法</p>
            </div>
        </div>
        </>
    )
}