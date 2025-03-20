import type { Schema, Struct } from '@strapi/strapi';

export interface CaracteristicasEspecitificaciones
  extends Struct.ComponentSchema {
  collectionName: 'components_caracteristicas_especitificaciones';
  info: {
    description: '';
    displayName: 'especitificaciones';
    icon: 'code';
  };
  attributes: {
    caracteristica: Schema.Attribute.Enumeration<
      ['Modelo', 'Marca', 'Resistencia', 'Acci\u00F3n']
    > &
      Schema.Attribute.Required;
    detalle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CaracteristicasNombrecomponente
  extends Struct.ComponentSchema {
  collectionName: 'components_caracteristicas_nombrecomponentes';
  info: {
    description: '';
    displayName: 'nombrecomponente';
    icon: 'database';
  };
  attributes: {
    Caracteristica: Schema.Attribute.Enumeration<
      ['Modelo', 'Marca', 'Resistencia', 'Acci\u00F3n']
    >;
    Detalles: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'caracteristicas.especitificaciones': CaracteristicasEspecitificaciones;
      'caracteristicas.nombrecomponente': CaracteristicasNombrecomponente;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
