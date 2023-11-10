type StackBlitzProps = {
    stackBlitzBaseUrl : string;
    title: string
}

function StackBlitzCode({stackBlitzBaseUrl, title} :StackBlitzProps) {
    return (
        <iframe
            width="100%"
            height="600px"
            src={stackBlitzBaseUrl}
            allowFullScreen = {true}
            allow="fullscreen; encrypted-media"
            title={title}
        ></iframe>
    );
}

export default StackBlitzCode;