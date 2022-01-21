import Head from 'next/head';
import Layout from '../components/layout';
import { getModel } from '../lib/api';
import { useEffect, useState } from 'react';
// import { getICEAttributes, initInContextEditing } from '@craftercms/experience-builder';

// This function would get removed, as you would simply use getICEAttributes from
// @craftercms/experience-builder package
const getICEAttributes = ({ model, fieldId, isAuthoring }) => isAuthoring ? ({
  'data-craftercms-model-id': model.craftercms.id,
  'data-craftercms-model-path': model.craftercms.path,
  'data-craftercms-field-id': fieldId
}) : ({});

// global.XMLHttpRequest = xhr.XMLHttpRequest;

export default function Home({ model }) {
  const [isAuthoring, setIsAuthoring] = useState(false);
  useEffect(() => {
    setIsAuthoring(true);
    // This will become an invocation to initInContextEditing from
    // @craftercms/experience-builder package
    window.craftercms.guest.initInContextEditing({
      path: model.craftercms.path,
      modelId: model.craftercms.id
    });
  }, []);
  return (
    <Layout>
      <Head>
        <title>{model.title_t}</title>
      </Head>
      <article>
        <h1
          {...getICEAttributes({ model, isAuthoring, fieldId: 'title_t' })}
        >{model.title_t}</h1>
        <div
          {...getICEAttributes({ model, isAuthoring, fieldId: 'body_html' })}
          dangerouslySetInnerHTML={{ __html: model.body_html }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticProps() {
  const model = await getModel();
  return {
    props: { model }
  };
}
