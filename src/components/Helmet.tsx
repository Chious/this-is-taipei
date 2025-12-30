export default function Helmet({
  title,
  description,
  keywords,
  author,
}: {
  title: string;
  description: string;
  keywords: string;
  author: string;
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </>
  );
}
